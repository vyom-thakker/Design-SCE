let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":1.2331, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.1101, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":9.1133, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":8.0178, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.1107, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.0949, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":6.093, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.6451, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0801, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0126, "optimal":"yes"} ]}; 
