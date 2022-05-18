let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.108, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0039, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4076, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.3184, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.7336, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7021, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0097, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7517, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.5336, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0565, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.007, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0011, "optimal":"yes"} ]}; 
