let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0012, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.2329, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4818, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0061, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.205, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0187, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0362, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1688, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Pyrolysis", "value":0.0089, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0928, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0485, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0186, "optimal":"yes"} ]}; 