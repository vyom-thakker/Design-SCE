let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPaper"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.4059, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0399, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":4.4797, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.1055, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":4.82, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0962, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0085, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.017, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.0721, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0044, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0015, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0006, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.0711, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0009, "optimal":"yes"} ]}; 