let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.001, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0722, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3077, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.6763, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0252, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":0.0129, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9644, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1299, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0052, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.873, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0776, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1541, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0474, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2022, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.4443, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0166, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.0085, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0171, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0261, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0043, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0687, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1112, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0222, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.1644, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.2444, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0355, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0129, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0025, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0012, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.0084, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0001, "optimal":"yes"} ]}; 
