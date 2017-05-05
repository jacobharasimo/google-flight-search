export function MinutesToDuration() {
    return (value) => {
        let output = '';
        let hours = Math.floor(value / 60);
        const days = Math.floor(hours / 24);
        const minutes = value % 60;
        if (days > 0) {
            hours = hours % 24;
            output += days + ' day ';
        }
        if (hours > 0) {
            output += hours + ' hour ';
        }
        output += minutes + ' min';
        return output;
    };
}
