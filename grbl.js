module.exports = function(RED) {

    function GrblNode(config) {

        RED.nodes.createNode(this, config);
        const node = this;

        const GrblParser = require("grbl-parser");
        const grbl = new GrblParser();

        node.on('input', function(msg) {
            //msg.payload = msg.payload.toLowerCase();
            msg.payload = grbl.parseResponse(msg.payload);
            node.send(msg);
        });

    }

    RED.nodes.registerType("Grbl", GrblNode);

};