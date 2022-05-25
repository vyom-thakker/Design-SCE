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
 {"source":"LDPE", "target":"Households", "value":0.0973, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.5896, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.8765, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.8104, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.6226, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2314, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0692, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.5534, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0381, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0235, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0076, "optimal":"yes"} ]}; 
