let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPaper"},
{"name":"Compost"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0259, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0053, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0042, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0019, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0052, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":8.8737, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":4.1101, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.2941, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":4.4862, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.1214, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":1.4904, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.0603, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.3307, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0083, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Landfill", "value":0.1016, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.1404, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0335, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3884, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0011, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0009, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0004, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":1.8089, "optimal":"yes"} , 
{"source":"Segregation", "target":"Compost", "value":0.0011, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0006, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0004, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0005, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0003, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0002, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0001, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":1.7835, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0235, "optimal":"yes"} ]}; 