let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.0256, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.0062, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.5532, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4786, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.2396, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2859, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0206, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":3.219, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0113, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.006999999999999999, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0023, "optimal":"yes"} ]}; 
