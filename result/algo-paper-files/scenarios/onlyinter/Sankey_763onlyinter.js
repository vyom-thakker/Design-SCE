let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0521, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3961, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0046, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.314, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.2581, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0514, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0319, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0029, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0006, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0092, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0428, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Pyrolysis", "value":0.0146, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0236, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0047, "optimal":"yes"} ]}; 
