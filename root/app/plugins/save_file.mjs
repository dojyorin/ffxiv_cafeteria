export function saveFile(name, binary){
    const link = document.createElement("a");
    link.href = URL.createObjectURL(binary instanceof Blob ? binary : new Blob([binary]));
    link.download = name;
    link.click();
    URL.revokeObjectURL(link.href);
}

export default saveFile;