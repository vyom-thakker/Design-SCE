let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.5719, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1428, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5214, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.046, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.092, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4294, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.146, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2362, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0472, "optimal":"yes"} ]}; 
