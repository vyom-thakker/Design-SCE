let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0765, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.4975, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0068, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2104, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.3781, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.04, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0049, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0008, "optimal":"yes"} ]}; 
