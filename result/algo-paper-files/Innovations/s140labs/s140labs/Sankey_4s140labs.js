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
{"source":"Households", "target":"Curbside Collection", "value":0.3988, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3159, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3636, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0321, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0642, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2995, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1018, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1647, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0329, "optimal":"yes"} ]}; 
