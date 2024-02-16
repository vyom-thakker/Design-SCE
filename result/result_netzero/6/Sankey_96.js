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
 {"source":"LDPE", "target":"Households", "value":0.2611, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.6368, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5529, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3451, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3276, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2054, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.4108, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1727, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.744, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.095, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0587, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.019, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Lactic acid from acid hydrolysis", "target":"Value-chain Upstream", "value":1.744, "optimal":"yes"} ]}; 