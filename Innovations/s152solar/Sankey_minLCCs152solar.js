let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0321, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.2087, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0029, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":3.9434, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.1586, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0168, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0021, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0003, "optimal":"yes"} ]}; 
