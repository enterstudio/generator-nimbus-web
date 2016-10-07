"use strict";

exports.pathsWithOptions = function(gen, paths, options) {
    paths.forEach((p) => {
        gen.template(p.in, p.out, options);
    });
};