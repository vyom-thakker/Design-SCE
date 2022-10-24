let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.4673, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.4383, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.6793, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2263, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.5311, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1351, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2702, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3092, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.9517, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1701, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1051, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.034, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Lactic acid from acid hydrolysis", "target":"Value-chain Upstream", "value":0.9517, "optimal":"yes"} ]}; 
