namespace Utility {    
    export namespace Fees {        
        export function CalculateLateFee(daysLate: number): number {
            return daysLate * 0.25;
        }
    }
}