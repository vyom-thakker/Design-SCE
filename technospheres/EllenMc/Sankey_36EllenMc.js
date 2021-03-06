let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"Incineration", "target":"Landfill", "value":0.0763, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0085, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":2.6679, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0049, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3555, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3173, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.003, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":1.0146, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.7611, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3007, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1895, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.7611, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.2471, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0005, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.08900000000000001, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1359, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0222, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0002, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0003, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0001, "optimal":"yes"} ]}; 
