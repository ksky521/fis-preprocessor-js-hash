/**
 * 给js文件增加hash
 *
 * @example:
 * var hash = '__filehash';
 * src = 'xxx?t='+hash;
 */
'use strict'

module.exports = function(content, file, conf) {
    var reg = /('|")(__filehash)\1/g;
    content = content.replace(reg, function(m, quote, type) {
        if (type) {
            switch (type) {
                case '__filehash':
                    m = quote + file.getHash() + quote;
                    break;
            }
        }
        return m;
    });
    return content;
}
