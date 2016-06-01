class ReferenceItem {
    private publisher: string;
    public static deparatment: string = "Shipping";
    
    constructor(public title: string) {
        
    }
    
    public get Publisher(): string {
        return this.publisher;
    }
    
    public set Publisher(value: string) {
        this.publisher = value;
    }
}