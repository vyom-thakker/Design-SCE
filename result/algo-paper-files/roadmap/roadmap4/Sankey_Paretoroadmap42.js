let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.2185, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":1.253, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3814, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.421, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0194, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.194, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":1.0798, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1143, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.014, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0022, "optimal":"yes"} ]}; 
