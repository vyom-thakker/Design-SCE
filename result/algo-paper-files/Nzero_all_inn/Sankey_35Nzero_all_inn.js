let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0145, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.2572, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0004, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.6357, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5627, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3452, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3365, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2062, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.4124, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0096, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1702, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.744, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0053, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0035, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0009, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0936, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0579, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0187, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0002, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0001, "optimal":"yes"} ]}; 