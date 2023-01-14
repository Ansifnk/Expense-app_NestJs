export enum ReportType {
    INCOME = 'income',
    EXPENSE = "expense"
}

export const data: Data = {
    report: [
        {
            id: 'alkdjf',
            source: 'salary',
            amount: 5000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'aldfkdjf',
            source: 'buy',
            amount: 200,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
    ]
}


interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[]
}


