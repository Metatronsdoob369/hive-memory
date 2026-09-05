import json
from datetime import datetime
import glob
import sys

def parse():
    for f in glob.glob("/Users/joewales/Downloads/workspace/scratch/sovereign_pipeline/*_escheatment_al.json"):
        with open(f) as fp:
            data = json.load(fp)
        
        entity = data.get("entity", "Unknown")
        print(f"\nTarget: {entity} (CIK: {data.get('cik')})")
        events = data.get("events", [])
        
        if not events:
            print("  No events found.")
            continue
            
        for ev in events:
            projections = ev.get("projections", [])
            for p in projections:
                ed = p.get("expiry_date")
                if ed:
                    try:
                        exp_dt = datetime.strptime(ed, "%Y-%m-%d")
                        now = datetime(2026, 8, 30)
                        if exp_dt >= now:
                            print(f"  [ACTIVE] {ev['event_class']} on {ev['event_date']} -> Expires: {ed} ({p['code']})")
                        else:
                            pass # Expired
                    except Exception as e:
                        print("Error", e)
                        
parse()
