let dataV={"nodes": [
{"name":"Pyrolysis"},
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
 {"source":"Pyrolysis", "target":"Losses", "value":0.001, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.4827, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.23199999999999998, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0051, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.434, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0388, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0766, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3574, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1215, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1966, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0393, "optimal":"yes"} ]}; 
