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
 {"source":"Pyrolysis", "target":"Losses", "value":0.2653, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":1.7299, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.2545, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.7253, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0235, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2356, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":1.3111, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1388, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.017, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0027, "optimal":"yes"} ]}; 
