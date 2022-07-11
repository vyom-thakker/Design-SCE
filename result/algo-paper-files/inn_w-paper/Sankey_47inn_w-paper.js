let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0537, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7004, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6646, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0895, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.606, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0535, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.107, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.339, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1219, "optimal":"yes"} ]}; 
