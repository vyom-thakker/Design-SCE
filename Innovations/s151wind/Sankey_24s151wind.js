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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0405, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.5889, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0035, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1223, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.2015, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2951, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0474, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0011, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0017, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0524, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2444, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1344, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0831, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0269, "optimal":"yes"} ]}; 