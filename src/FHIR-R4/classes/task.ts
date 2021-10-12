/**
 * Account-ActivityDefinition-AdverseEvent-AllergyIntolerance-Appointment-AppointmentResponse-AuditEvent-Basic-Binary-BiologicallyDerivedProduct-BodyStructure-Bundle-CapabilityStatement-CarePlan-CareTeam-CatalogEntry-ChargeItem-ChargeItemDefinition-Claim-ClaimResponse-ClinicalImpression-CodeSystem-Communication-CommunicationRequest-CompartmentDefinition-Composition-ConceptMap-Condition-Consent-Contract-Coverage-CoverageEligibilityRequest-CoverageEligibilityResponse-DetectedIssue-Device-DeviceDefinition-DeviceMetric-DeviceRequest-DeviceUseStatement-DiagnosticReport-DocumentManifest-DocumentReference-EffectEvidenceSynthesis-Encounter-Endpoint-EnrollmentRequest-EnrollmentResponse-EpisodeOfCare-EventDefinition-Evidence-EvidenceVariable-ExampleScenario-ExplanationOfBenefit-FamilyMemberHistory-Flag-Goal-GraphDefinition-Group-GuidanceResponse-HealthcareService-ImagingStudy-Immunization-ImmunizationEvaluation-ImmunizationRecommendation-ImplementationGuide-InsurancePlan-Invoice-Library-Linkage-List-Location-Measure-MeasureReport-Media-Medication-MedicationAdministration-MedicationDispense-MedicationKnowledge-MedicationRequest-MedicationStatement-MedicinalProduct-MedicinalProductAuthorization-MedicinalProductContraindication-MedicinalProductIndication-MedicinalProductIngredient-MedicinalProductInteraction-MedicinalProductManufactured-MedicinalProductPackaged-MedicinalProductPharmaceutical-MedicinalProductUndesirableEffect-MessageDefinition-MessageHeader-MolecularSequence-NamingSystem-NutritionOrder-Observation-ObservationDefinition-OperationDefinition-OperationOutcome-Organization-OrganizationAffiliation-Parameters-Patient-PaymentNotice-PaymentReconciliation-Person-PlanDefinition-Practitioner-PractitionerRole-Procedure-Provenance-Questionnaire-QuestionnaireResponse-RelatedPerson-RequestGroup-ResearchDefinition-ResearchElementDefinition-ResearchStudy-ResearchSubject-RiskAssessment-RiskEvidenceSynthesis-Schedule-SearchParameter-ServiceRequest-Slot-Specimen-SpecimenDefinition-StructureDefinition-StructureMap-Subscription-Substance-SubstanceNucleicAcid-SubstancePolymer-SubstanceProtein-SubstanceReferenceInformation-SubstanceSourceMaterial-SubstanceSpecification-SupplyDelivery-SupplyRequest-Task-TerminologyCapabilities-TestReport-TestScript-ValueSet-VerificationResult-VisionPrescription--FHIRAPI
 * Swagger for FHIR Resources Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Annotation } from './annotation';
import { Canonical } from './canonical';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { DateTime } from './dateTime';
import { Extension } from './extension';
import { Id } from './id';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { Reference } from './reference';
import { TaskInput } from './taskInput';
import { TaskOutput } from './taskOutput';
import { TaskRestriction } from './taskRestriction';
import { Uri } from './uri';


/**
 * A task to be performed.
 */
export class Task { 
    /**
     * This is a Task resource
     */
    resourceType: string;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: Id;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: Meta;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: Uri;
    /**
     * The base language in which the resource is written.
     */
    language?: Code;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * The business identifier for this task.
     */
    identifier?: Array<Identifier>;
    /**
     * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesCanonical?: Canonical;
    /**
     * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
     */
    instantiatesUri?: Uri;
    /**
     * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a \"request\" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the \"request\" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
     */
    basedOn?: Array<Reference>;
    /**
     * An identifier that links together multiple tasks and other requests that were created in the same context.
     */
    groupIdentifier?: Identifier;
    /**
     * Task that this particular task is part of.
     */
    partOf?: Array<Reference>;
    /**
     * The current status of the task.
     */
    status?: Task.StatusEnum;
    /**
     * An explanation as to why this task is held, failed, was refused, etc.
     */
    statusReason?: CodeableConcept;
    /**
     * Contains business-specific nuances of the business state.
     */
    businessStatus?: CodeableConcept;
    /**
     * Indicates the \"level\" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.
     */
    intent?: Task.IntentEnum;
    /**
     * Indicates how quickly the Task should be addressed with respect to other requests.
     */
    priority?: Code;
    /**
     * A name or code (or both) briefly describing what the task involves.
     */
    code?: CodeableConcept;
    /**
     * A free-text description of what is to be performed.
     */
    description?: string;
    /**
     * The request being actioned or the resource being manipulated by this task.
     */
    focus?: Reference;
    /**
     * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
     */
    for?: Reference;
    /**
     * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
     */
    encounter?: Reference;
    /**
     * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
     */
    executionPeriod?: Period;
    /**
     * The date and time this task was created.
     */
    authoredOn?: Date;
    /**
     * The date and time of last modification to this task.
     */
    lastModified?: Date;
    /**
     * The creator of the task.
     */
    requester?: Reference;
    /**
     * The kind of participant that should perform the task.
     */
    performerType?: Array<CodeableConcept>;
    /**
     * Individual organization or Device currently responsible for task execution.
     */
    owner?: Reference;
    /**
     * Principal physical location where the this task is performed.
     */
    location?: Reference;
    /**
     * A description or code indicating why this task needs to be performed.
     */
    reasonCode?: CodeableConcept;
    /**
     * A resource reference indicating why this task needs to be performed.
     */
    reasonReference?: Reference;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
     */
    insurance?: Array<Reference>;
    /**
     * Free-text information captured about the task as it progresses.
     */
    note?: Array<Annotation>;
    /**
     * Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.
     */
    relevantHistory?: Array<Reference>;
    /**
     * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
     */
    restriction?: TaskRestriction;
    /**
     * Additional information that may be needed in the execution of the task.
     */
    input?: Array<TaskInput>;
    /**
     * Outputs produced by the Task.
     */
    output?: Array<TaskOutput>;
}
export namespace Task {
    export type StatusEnum = 'draft' | 'requested' | 'received' | 'accepted' | 'rejected' | 'ready' | 'cancelled' | 'in-progress' | 'on-hold' | 'failed' | 'completed' | 'entered-in-error';
    export const StatusEnum = {
        Draft: 'draft' as StatusEnum,
        Requested: 'requested' as StatusEnum,
        Received: 'received' as StatusEnum,
        Accepted: 'accepted' as StatusEnum,
        Rejected: 'rejected' as StatusEnum,
        Ready: 'ready' as StatusEnum,
        Cancelled: 'cancelled' as StatusEnum,
        InProgress: 'in-progress' as StatusEnum,
        OnHold: 'on-hold' as StatusEnum,
        Failed: 'failed' as StatusEnum,
        Completed: 'completed' as StatusEnum,
        EnteredInError: 'entered-in-error' as StatusEnum
    };
    export type IntentEnum = 'unknown' | 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';
    export const IntentEnum = {
        Unknown: 'unknown' as IntentEnum,
        Proposal: 'proposal' as IntentEnum,
        Plan: 'plan' as IntentEnum,
        Order: 'order' as IntentEnum,
        OriginalOrder: 'original-order' as IntentEnum,
        ReflexOrder: 'reflex-order' as IntentEnum,
        FillerOrder: 'filler-order' as IntentEnum,
        InstanceOrder: 'instance-order' as IntentEnum,
        Option: 'option' as IntentEnum
    };
}
