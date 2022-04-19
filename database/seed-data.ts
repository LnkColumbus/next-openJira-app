interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    createdAt: number;
    status: string;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Do laboris nisi ex est sint laboris nostrud.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En-Progreso: Ad eiusmod sunt incididunt velit est adipisicing qui.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: Ea dolor veniam occaecat est.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}