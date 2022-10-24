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
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0019, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.5316, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5347, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0435, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0799, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":0.0035, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7254, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4677, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0095, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6499, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0584, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1147, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.2385, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2399, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0195, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0358, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.0016, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0858, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1312, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0215, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0662, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1319, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0154, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0264, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0072, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0107, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0016, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0279, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0054, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0025, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.0015, "optimal":"yes"} ]}; 