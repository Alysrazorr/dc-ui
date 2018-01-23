var Dui = window.Dui || {};
Dui.newClazz = function (ms) {
    var clazz = function () {
        for (var m in ms) { this[m] = ms[m]; };
        this['init'] = !this['init'] ? undefined : this['init'];
        this['uuid'] = !this['uuid'] ? undefined : this['uuid'];
    };
    return clazz;
};

Dui.getUUID = function () {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
};