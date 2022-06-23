let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.6505, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.3734, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9023, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1215, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8227, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0726, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3791, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0991, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0345, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.2235, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0766, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2085, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1289, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0417, "optimal":"yes"} ]}; 
