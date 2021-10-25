let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.3592, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":2.6864, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3356, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0318, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3189, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":1.7749, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1879, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.023, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0036, "optimal":"yes"} ]}; 
