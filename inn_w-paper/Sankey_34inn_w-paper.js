let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0018, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0076, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.3662, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":6.8504, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.443, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":7.7813, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.009, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3931, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0356, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0694, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.2696, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0538, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.2658, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0035, "optimal":"yes"} ]}; 
