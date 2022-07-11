let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.2705, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.1574, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.2399, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.7586, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0244, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.6143, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":1.3364, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1415, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0177, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0028, "optimal":"yes"} ]}; 
