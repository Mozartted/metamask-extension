// Type Imports
/**
 * @typedef {import('../../shared/constants/app').EnvironmentType} EnvironmentType
 */

// Type Declarations
/**
 * Used to attach context of where the user was at in the application when the
 * event was triggered. Also included as full details of the current page in
 * page events.
 *
 * @typedef {Object} MetaMetricsPageObject
 * @property {string} [path] - the path of the current page (e.g /home)
 * @property {string} [title] - the title of the current page (e.g 'home')
 * @property {string} [url] - the fully qualified url of the current page
 */

/**
 * For metamask, this is the dapp that triggered an interaction
 *
 * @typedef {Object} MetaMetricsReferrerObject
 * @property {string} [url] - the origin of the dapp issuing the
 *  notification
 */

/**
 * We attach context to every meta metrics event that help to qualify our
 * analytics. This type has all optional values because it represents a
 * returned object from a method call. Ideally app and userAgent are
 * defined on every event. This is confirmed in the getTrackMetaMetricsEvent
 * function, but still provides the consumer a way to override these values if
 * necessary.
 *
 * @typedef {Object} MetaMetricsContext
 * @property {Object} app - Application metadata.
 * @property {string} app.name - the name of the application tracking the event
 * @property {string} app.version - the version of the application
 * @property {string} userAgent - the useragent string of the user
 * @property {MetaMetricsPageObject} [page] - an object representing details of
 *  the current page
 * @property {MetaMetricsReferrerObject} [referrer] - for metamask, this is the
 *  dapp that triggered an interaction
 */

/**
 * @typedef {Object} MetaMetricsEventPayload
 * @property {string} event - event name to track
 * @property {string} category - category to associate event to
 * @property {string} [environmentType] - The type of environment this event
 *  occurred in. Defaults to the background process type
 * @property {object} [properties] - object of custom values to track, keys
 *  in this object must be in snake_case
 * @property {object} [sensitiveProperties] - Object of sensitive values to
 *  track. Keys in this object must be in snake_case. These properties will be
 *  sent in an additional event that excludes the user's metaMetricsId
 * @property {number} [revenue] - amount of currency that event creates in
 *  revenue for MetaMask
 * @property {string} [currency] - ISO 4127 format currency for events with
 *  revenue, defaults to US dollars
 * @property {number} [value] - Abstract business "value" attributable to
 *  customers who trigger this event
 * @property {MetaMetricsPageObject} [page] - the page/route that the event
 *  occurred on
 * @property {MetaMetricsReferrerObject} [referrer] - the origin of the dapp
 *  that triggered the event
 */

/**
 * @typedef {Object} MetaMetricsEventOptions
 * @property {boolean} [isOptIn] - happened during opt in/out workflow
 * @property {boolean} [flushImmediately] - When true will automatically flush
 *  the segment queue after tracking the event. Recommended if the result of
 *  tracking the event must be known before UI transition or update
 * @property {boolean} [excludeMetaMetricsId] - whether to exclude the user's
 *  metametrics id for anonymity
 * @property {string} [metaMetricsId] - an override for the metaMetricsId in
 *  the event one is created as part of an asynchronous workflow, such as
 *  awaiting the result of the metametrics opt-in function that generates the
 *  user's metametrics id
 * @property {boolean} [matomoEvent] - is this event a holdover from matomo
 *  that needs further migration? when true, sends the data to a special
 *  segment source that marks the event data as not conforming to our schema
 */

/**
 * @typedef {Object} MetaMetricsEventFragment
 * @property {string} successEvent - The event name to fire when the fragment
 *  is closed in an affirmative action.
 * @property {string} [failureEvent] - The event name to fire when the fragment
 *  is closed with a rejection.
 * @property {string} [initialEvent] - An event name to fire immediately upon
 *  fragment creation. This is useful for building funnels in mixpanel and for
 *  reduction of code duplication.
 * @property {string} category - the event category to use for both the success
 *  and failure events
 * @property {boolean} [persist] - Should this fragment be persisted in
 *  state and progressed after the extension is locked and unlocked.
 * @property {number} [timeout] - Time in seconds the event should be persisted
 *  for. After the timeout the fragment will be closed as abandoned. if not
 *  supplied the fragment is stored indefinitely.
 * @property {number} [lastUpdated] - Date.now() when the fragment was last
 *  updated. Used to determine if the timeout has expired and the fragment
 *  should be closed.
 * @property {object} [properties] - Object of custom values to track, keys in
 *  this object must be in snake_case.
 * @property {object} [sensitiveProperties] - Object of sensitive values to
 *  track. Keys in this object must be in snake_case. These properties will be
 *  sent in an additional event that excludes the user's metaMetricsId
 * @property {number} [revenue] - amount of currency that event creates in
 *  revenue for MetaMask if fragment is successful.
 * @property {string} [currency] - ISO 4127 format currency for events with
 *  revenue, defaults to US dollars
 * @property {number} [value] - Abstract business "value" attributable to
 *  customers who successfully complete this fragment
 * @property {MetaMetricsPageObject} [page] - the page/route that the event
 *  occurred on
 * @property {MetaMetricsReferrerObject} [referrer] - the origin of the dapp
 *  that initiated the event fragment.
 * @property {string} [uniqueIdentifier] - optional argument to override the
 *  automatic generation of UUID for the event fragment. This is useful when
 *  tracking events for subsystems that already generate UUIDs so to avoid
 *  unnecessary lookups and reduce accidental duplication.
 */

/**
 * Represents the shape of data sent to the segment.track method.
 *
 * @typedef {Object} SegmentEventPayload
 * @property {string} [userId] - The metametrics id for the user
 * @property {string} [anonymousId] - An anonymousId that is used to track
 *  sensitive data while preserving anonymity.
 * @property {string} event - name of the event to track
 * @property {Object} properties - properties to attach to the event
 * @property {MetaMetricsContext} context - the context the event occurred in
 */

/**
 * @typedef {Object} MetaMetricsPagePayload
 * @property {string} name - The name of the page that was viewed
 * @property {Object} [params] - The variadic parts of the page url
 *  example (route: `/asset/:asset`, path: `/asset/ETH`)
 *  params: { asset: 'ETH' }
 * @property {EnvironmentType} environmentType - the environment type that the
 *  page was viewed in
 * @property {MetaMetricsPageObject} [page] - the details of the page
 * @property {MetaMetricsReferrerObject} [referrer] - dapp that triggered the page
 *  view
 */

/**
 * @typedef {Object} MetaMetricsPageOptions
 * @property {boolean} [isOptInPath] - is the current path one of the pages in
 *  the onboarding workflow? If true and participateInMetaMetrics is null track
 *  the page view
 */

/**
 * @typedef {Object} Traits
 * @property {string} [LEDGER_CONNECTION_TYPE] - when ledger live connnection
 * type is changed we identify the ledger_connection_type trait
 * @property {string} [NETWORKS_ADDED] - when user modifies networks we
 * identify the networks_added trait
 * @property {string} [NFT_AUTODETECTION_ENABLED] - when Autodetect NFTs
 * feature is toggled we identify the nft_autodetection_enabled trait
 * @property {string} [NUMBER_OF_ACCOUNTS] - when identities change, we
 * identify the new number_of_accounts trait
 * @property {string} [THREE_BOX_ENABLED] - when 3box feature is toggled we
 * identify the 3box_enabled trait
 */

/**
 *
 * @type {Traits}
 */

export const TRAITS = {
  LEDGER_CONNECTION_TYPE: 'ledger_connection_type',
  NETWORKS_ADDED: 'networks_added',
  NFT_AUTODETECTION_ENABLED: 'nft_autodetection_enabled',
  NUMBER_OF_ACCOUNTS: 'number_of_accounts',
  THREE_BOX_ENABLED: 'three_box_enabled',
};

// Mixpanel converts the zero address value to a truly anonymous event, which
// speeds up reporting
export const METAMETRICS_ANONYMOUS_ID = '0x0000000000000000';

/**
 * This object is used to identify events that are triggered by the background
 * process.
 *
 * @type {MetaMetricsPageObject}
 */
export const METAMETRICS_BACKGROUND_PAGE_OBJECT = {
  path: '/background-process',
  title: 'Background Process',
  url: '/background-process',
};

/**
 * @typedef {Object} SegmentInterface
 * @property {SegmentEventPayload[]} queue - A queue of events to be sent when
 *  the flushAt limit has been reached, or flushInterval occurs
 * @property {() => void} flush - Immediately flush the queue, resetting it to
 *  an empty array and sending the pending events to Segment
 * @property {(
 *  payload: SegmentEventPayload,
 *  callback: (err?: Error) => void
 * ) => void} track - Track an event with Segment, using the internal batching
 *  mechanism to optimize network requests
 * @property {(payload: Object) => void} page - Track a page view with Segment
 * @property {() => void} identify - Identify an anonymous user. We do not
 *  currently use this method.
 */

export const REJECT_NOTFICIATION_CLOSE = 'Cancel Via Notification Close';
export const REJECT_NOTFICIATION_CLOSE_SIG =
  'Cancel Sig Request Via Notification Close';

export const EVENT_NAMES = {
  SIGNATURE_REQUESTED: 'Signature Requested',
  ENCRYPTION_PUBLIC_KEY_REQUESTED: 'Encryption Public Key Requested',
  DECRYPTION_REQUESTED: 'Decryption Requested',
  PERMISSIONS_REQUESTED: 'Permissions Requested',
};
