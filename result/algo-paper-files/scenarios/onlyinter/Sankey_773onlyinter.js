let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0463, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3013, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0041, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4093, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.22899999999999998, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0242, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0029, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0005, "optimal":"yes"} ]}; 
