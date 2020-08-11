let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":1.4402, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":10.7722, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":9.3646, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.1289, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.2788, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":7.1165, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.7535, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0933, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0147, "optimal":"yes"} ]}; 
