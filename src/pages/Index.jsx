import { Box, Container, Text, VStack, Button, Image, SimpleGrid, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bg="blue.900" color="white" py={10}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading as="h1" size="2xl">
              Ett modernt fastighetssystem
            </Heading>
            <Text fontSize="lg">
              TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.
            </Text>
            <Text>kontakt@tenfast.se</Text>
            <Text>08-199 552</Text>
            <Button colorScheme="teal" size="lg">
              Kom igång
            </Button>
            <Image src="/images/laptop-mobile.png" alt="Laptop and Mobile" />
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={10}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl">
            Fastighetssystemet för din verksamhet
          </Heading>
          <Text fontSize="lg">
            Program för fastighetsägare, förvaltningsbolag och kommuner mm.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
          <VStack align="start" spacing={4}>
            <Text fontSize="lg">
              <FaCheckCircle /> Webbaserat
            </Text>
            <Text fontSize="lg">
              <FaCheckCircle /> Enkel prissättning
            </Text>
            <Text fontSize="lg">
              <FaCheckCircle /> Automatisera din verksamhet
            </Text>
            <Text fontSize="lg">
              <FaCheckCircle /> Allt i ett
            </Text>
          </VStack>
          <Image src="/images/illustration.png" alt="Illustration" />
        </SimpleGrid>
      </Container>

      <Box bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl">
              Det här får du med TenFAST
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg">
                <FaCheckCircle /> Avtalskapare med mallar
              </Text>
              <Text fontSize="lg">
                <FaCheckCircle /> Hyresgäst inloggning
              </Text>
              <Text fontSize="lg">
                <FaCheckCircle /> Bostadskö
              </Text>
              <Text fontSize="lg">
                <FaCheckCircle /> Bokföring
              </Text>
            </VStack>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg">
                <FaCheckCircle /> Statistik
              </Text>
              <Text fontSize="lg">
                <FaCheckCircle /> Felanmälan
              </Text>
              <Text fontSize="lg">
                <FaCheckCircle /> Automatiska inbetalningar
              </Text>
              <Text fontSize="lg">
                <FaCheckCircle /> Öppet API
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="container.xl" py={10}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl">
            Passar stora och små
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
          <VStack align="start" spacing={4} bg="white" p={5} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="lg">
              Free
            </Heading>
            <Text fontSize="lg">0 kr</Text>
            <Text>För privatpersoner och små företag med upp till 5 hyresobjekt.</Text>
            <Button colorScheme="teal">Kom igång</Button>
          </VStack>
          <VStack align="start" spacing={4} bg="white" p={5} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="lg">
              Pro
            </Heading>
            <Text fontSize="lg">10 kr / hyresobjekt / månad</Text>
            <Text>För privata fastighetsägare upp till 100 hyresobjekt.</Text>
            <Button colorScheme="teal">Kom igång</Button>
          </VStack>
          <VStack align="start" spacing={4} bg="black" color="white" p={5} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="lg">
              Enterprise
            </Heading>
            <Text fontSize="lg">Offert</Text>
            <Text>För fastighetsbolag eller förvaltare från 101 till tusentals hyresobjekt.</Text>
            <Button colorScheme="teal">Kontakta oss</Button>
          </VStack>
        </SimpleGrid>
      </Container>

      <Box bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl">
              Vanliga frågor
            </Heading>
          </VStack>
          <Accordion allowToggle py={10}>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Vad är TenFAST fastighetssystem?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Är TenFAST webbaserat?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd dator eller mobilen!
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Vad kostar systemet?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Funkar fastighetssystemet på mobilen?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, TenFAST är byggt för webben och fungerar på både dator och mobil.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Hur kan fastighetssystemet vara så billigt?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Varför kan jag använda det gratis?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                TenFAST är gratis för mindre hyresvärdar med upp till 5 hyresobjekt.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Vad räknas som ett hyresobjekt?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ett hyresobjekt är en enhet som hyrs ut, till exempel en lägenhet, ett hus eller en lokal.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Vilka funktioner finns i fastighetsprogrammet?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                TenFAST erbjuder en mängd funktioner inklusive avtalskapare, hyresgäst inloggning, bostadskö, bokföring, statistik, felanmälan, automatiska inbetalningar och öppet API.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Kan jag skapa hyresavtal och signera digitalt?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, du kan skapa egna hyresavtal och signera digitalt med BankID eller med penna och papper.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Kan hyresgästen använda det?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, hyresgästen får en egen inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Indexering av hyra
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                TenFAST erbjuder indexering av hyra baserat på konsumentprisindex.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Hur gör jag med mina befintliga hyresavtal?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Du kan enkelt importera dina befintliga hyresavtal till TenFAST.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Kan jag få hjälp att komma i gång?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, TenFAST erbjuder support via e-post och telefon.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>

      <Box bg="gray.200" py={10}>
        <Container maxW="container.xl" textAlign="center">
          <Text>Logga in</Text>
          <Text>kontakt@tenfast.se</Text>
          <Text>08-199 552</Text>
          <Text>Sankt Eriksgatan 114, 113 32 Stockholm</Text>
          <Text>© TenFAST AB 2024</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;