import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "jerry@dealflow.com" },
    update: {},
    create: {
      email: "jerry@dealflow.com",
      name: "Jerry Justin",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&q=80",
      password: "hashed-password",
      role: "ADMIN",
    },
  });

  const org = await prisma.organization.upsert({
    where: { slug: "dealflow" },
    update: {},
    create: {
      name: "DealFlow OS",
      slug: "dealflow",
      website: "https://dealflowos.com",
      ownerId: admin.id,
    },
  });

  await prisma.member.upsert({
    where: { id: "member-admin-dealflow" },
    update: {},
    create: {
      id: "member-admin-dealflow",
      userId: admin.id,
      organizationId: org.id,
      role: "ADMIN",
    },
  });

  const pipeline = await prisma.pipeline.upsert({
    where: { id: "pipeline-default" },
    update: {},
    create: {
      id: "pipeline-default",
      name: "Main pipeline",
      organizationId: org.id,
    },
  });

  const stages = [
    { id: "stage-lead", name: "Lead", position: 1 },
    { id: "stage-proposal", name: "Proposal", position: 2 },
    { id: "stage-negotiation", name: "Negotiation", position: 3 },
    { id: "stage-closed", name: "Closed Won", position: 4 },
  ];

  for (const stage of stages) {
    await prisma.pipelineStage.upsert({
      where: { id: stage.id },
      update: {},
      create: {
        id: stage.id,
        name: stage.name,
        position: stage.position,
        pipelineId: pipeline.id,
      },
    });
  }

  const sampleLeads = [
    {
      id: "lead-001",
      firstName: "Maria",
      lastName: "Santos",
      email: "maria.santos@gmail.com",
      phone: "+1 (305) 555-0142",
      propertyInterest: "3BR condo, Brickell",
      budget: 850000,
      source: "Zillow",
      status: "QUALIFIED",
      score: 92,
      scoreReason: "High budget, active search, responded within 24h",
      organizationId: org.id,
    },
    {
      id: "lead-004",
      firstName: "Robert",
      lastName: "Chen",
      email: "rchen@proton.me",
      phone: "+1 (954) 555-0177",
      propertyInterest: "Luxury waterfront",
      budget: 2400000,
      source: "Website",
      status: "NEW",
      score: 88,
      scoreReason: "Premium buyer profile, no agent yet",
      organizationId: org.id,
    },
  ];

  for (const lead of sampleLeads) {
    await prisma.lead.upsert({
      where: { id: lead.id },
      update: {},
      create: lead,
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
