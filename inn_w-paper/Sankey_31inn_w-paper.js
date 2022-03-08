let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Clay reycled PLA"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.2583, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6199, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0135, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0918, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":0.0241, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8854, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1223, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8072, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0712, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1425, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.0159, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3742, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0013, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.155, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clay reycled PLA", "value":0.0042, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.0564, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.0157, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0002, "optimal":"yes"} ]}; 
