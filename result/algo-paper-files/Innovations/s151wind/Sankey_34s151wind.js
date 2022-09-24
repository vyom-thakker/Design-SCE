let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3673, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3474, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":0.0289, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3043, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0296, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0537, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2506, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0518, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1378, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0334, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0276, "optimal":"yes"} ]}; 
