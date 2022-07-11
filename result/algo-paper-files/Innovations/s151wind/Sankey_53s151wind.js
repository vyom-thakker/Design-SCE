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
 {"source":"Pyrolysis", "target":"Losses", "value":0.1336, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4977, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.2617, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8688, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.012, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.8786, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.6603, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0699, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0087, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0014, "optimal":"yes"} ]}; 
