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
{"source":"Households", "target":"Curbside Collection", "value":0.1722, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5425, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.157, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0139, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0277, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1293, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0207, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0711, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0232, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0142, "optimal":"yes"} ]}; 
