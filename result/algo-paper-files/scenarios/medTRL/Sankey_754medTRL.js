let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0057, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6292, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0006, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0284, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5397, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0506, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0005, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0953, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4448, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Pyrolysis", "value":0.1057, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2447, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0456, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0489, "optimal":"yes"} ]}; 