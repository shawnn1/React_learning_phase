export function toCelcious(temperature){

    return (temperature-32)*5/9;
}
export function tofarenhite(temperature)
{
    return (temperature*9)/5+32;

}
export  function converter(temperature,convertto)
{
    const temperatur=parseFloat(temperature);
    const val=convertto(temperatur);
    const rounded= Math.round(val*1000)/1000;
    return rounded.toString();

}