export default function() {
    const store = {};

    this.setValue = (key, value) => store[key] = value;
    this.getValue = key => store[key];
}
