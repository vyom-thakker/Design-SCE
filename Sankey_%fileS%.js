let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0021, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0907, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":9.9019, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.8329, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":6.8936, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.1755, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0023, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.8079, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.579, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.23399999999999999, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1475, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0083, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Landfill", "value":2.8936, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Incineration", "value":2.0737, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.8379, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.7855, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1892, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":2.6527, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.8827, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.8703, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0115, "optimal":"yes"} ]}; 
